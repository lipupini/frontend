import { test, expect, Page } from '@playwright/test'

const host = 'http://localhost:1234'

const glob = require('glob')
const path = require('path')

const navigateToFirstAccount = async (page: Page) => {
	await page.goto(host + '/')
	const accountName = await page.locator('li a >> nth=0').innerText()

	await Promise.all([
		page.waitForResponse(resp => {
			return resp.url().includes('/api/files?account=' + accountName) && resp.status() === 200
		}),
		await page.locator('li a >> nth=0').click()
	])

	await expect(page).toHaveURL(host + '/' + accountName)
}

test.describe('Tests page display', () => {
	test('displays list of accounts on homepage', async ({ page }) => {
		await page.goto(host + '/')

		const publicFolder = __dirname + '/../public'
		const accounts = glob.sync(publicFolder + '/accounts/*')

		for (let i = 0; i < accounts.length; i++) {
			accounts[i] = path.basename(accounts[i])
			await expect(page.locator('li a:text-is("' + accounts[i] + '")')).toBeVisible()
		}
	})

	test('clicks an account and loads account page', async ({ page }) => {
		await navigateToFirstAccount(page)
	})

	test('opens settings', async ({ page }) => {
		// Settings are per-account, have to go to an account page
		await navigateToFirstAccount(page)
		await expect(page.locator('#settings-form')).not.toBeVisible()
		await page.locator('#button-container-settings button').click()
		await expect(page.locator('#settings-form')).toBeVisible()
	})
})

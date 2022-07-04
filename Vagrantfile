$provision = <<-SCRIPT
	curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
	echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	sudo apt update
	sudo apt install -y yarn

	cd /home/vagrant
	yarn
	yarn next telemetry disable
	sudo yarn global add pm2
	sudo pm2 start 'yarn dev --hostname 0.0.0.0' --name instalution
	sudo pm2 startup
SCRIPT

Vagrant.configure("2") do |config|
	# SSH login is --
	# vagrant:vagrant
	config.vm.box = "generic/ubuntu2104"
	config.vm.synced_folder ".", "/home/vagrant"
	config.vm.network "forwarded_port", guest: 1234, host: 1234
	config.vm.provision "shell", inline: $provision
end

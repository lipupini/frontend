$provision = <<-SCRIPT
	curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
	sudo apt-get install -y nodejs
	sudo corepack enable
	corepack prepare pnpm@7.6.0 --activate

	cd /home/vagrant/frontend
	pnpm install
	pnpm next telemetry disable

	sudo pnpm add --global pm2
	pm2 start 'pnpm dev --hostname 0.0.0.0' --name frontend
	#pm2 startup
	sudo env PATH=$PATH:/usr/bin /usr/pnpm-global/5/node_modules/.pnpm/pm2@5.2.0/node_modules/pm2/bin/pm2 startup systemd -u vagrant --hp /home/vagrant
SCRIPT

Vagrant.configure("2") do |config|
	# SSH login is --
	# vagrant:vagrant
	config.vm.box = "generic/debian11"
	config.vm.synced_folder ".", "/home/vagrant/frontend"
	config.vm.network "forwarded_port", guest: 1234, host: 1234
	config.vm.provision "shell", inline: $provision, privileged: false
end

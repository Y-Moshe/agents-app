rm -rf build/
rm /var/www/html/wp-content/plugins/agents-app/agents-app/css/*
rm /var/www/html/wp-content/plugins/agents-app/agents-app/js/*
yarn build
cp build/static/css/*.css /var/www/html/wp-content/plugins/agents-app/agents-app/css/
cp build/static/js/*.js /var/www/html/wp-content/plugins/agents-app/agents-app/js/
notify-send -u 'critical' 'Deployment' 'Successfully Deployed to Localhost WordPress'
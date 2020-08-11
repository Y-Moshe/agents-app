rm -rf build/
rm /var/www/wordpress/wp-includes/css/dist/agents-app/*
rm /var/www/wordpress/wp-includes/js/dist/agents-app/*
yarn build
cp build/static/css/*.css /var/www/wordpress/wp-includes/css/dist/agents-app/
cp build/static/js/*.js /var/www/wordpress/wp-includes/js/dist/agents-app/
notify-send -u 'critical' 'Deployment' 'Successfully Deployed to Localhost WordPress'
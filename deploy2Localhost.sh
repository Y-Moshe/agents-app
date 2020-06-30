rm -rf build/ 2> deploy2Localhost.log
rm /var/www/wordpress/wp-includes/css/dist/agents-app/* 2> deploy2Localhost.log
rm /var/www/wordpress/wp-includes/js/dist/agents-app/* 2> deploy2Localhost.log
yarn build 2> deploy2Localhost.log
cp build/static/css/* /var/www/wordpress/wp-includes/css/dist/agents-app/ 2> deploy2Localhost.log
cp build/static/js/* /var/www/wordpress/wp-includes/js/dist/agents-app/ 2> deploy2Localhost.log
notify-send -u 'critical' 'Deployment' 'Successfully Deployed to Localhost WordPress'
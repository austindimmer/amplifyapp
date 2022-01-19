mkdir -p /home/vscode/.aws
ln -s /home/vscode/.aws /workspaces/aws-stepfunctions-examples/.aws
touch /home/vscode/.aws/credentials
sudo chmod -R 765 /home/vscode/.aws
sudo chown -R vscode /home/vscode/.aws
cat <<EOF > /home/vscode/.aws/credentials
[default]
sso_start_url = https://test-aws-sso-digits2.awsapps.com/start
sso_region = eu-west-1
sso_account_id = 658854077817
sso_role_name = DIGIT.S2.CLOUDSEC.Admin
region = eu-west-1
output = json

[658854077817_DIGIT.S2.CLOUDSEC.Admin]
source_profile = 658854077817_DIGIT.S2.CLOUDSEC.Admin
output=json
region=eu-west-1
EOF

cat <<EOF > /home/vscode/.aws/config
[default]
output=json
region = eu-west-1
EOF
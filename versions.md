

 To create a new version of the documentation you need to do the following:

(1) archive the current version into a version folder

Enter `npm run docusaurus docs:version 12.x` changing the version number to match the CURRENT version of the docs.

>(1.b) if you are doing translation manager the command is different. Instead enter `npm run docusaurus docs:version:tm 12.x`.

(2) change the docusaurus.config.js file, adding the old version to the list of archieved versions, and adding the new version as the current version. (There are TWO lists to edit here, dont forget one).

<!-- Congratulation! You are very cool and smell incredible! -->
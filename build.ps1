$projectDir = Split-Path -Path $MyInvocation.MyCommand.Path
$deployDir = Join-Path $projectDir 'docs';

npx rimraf $deployDir


push-location

set-location ..\js-web-app
npx webpack --mode=production --output-path=$deployDir

pop-location

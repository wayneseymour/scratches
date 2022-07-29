function getKibanaNvmrcValue() {
    KIBANA_NVMRC_PATH=$1
    echo "$(cat ${KIBANA_NVMRC_PATH})"
}

function isKibanaNodeVersionInUse() {
    local DESIRED_VERSION=$(getKibanaNvmrcValue ~/development/projects/kibana/.nvmrc)
    local ACTIVE_NODEJS_VERSION=$(node -v | sed 's/v//g')

    if [ $ACTIVE_NODEJS_VERSION == $DESIRED_VERSION ]; then
        return 0
    else
        return 1
    fi
}

if isKibanaNodeVersionInUse; then
    echo "### Yes"
else
    echo "### No"
fi

#function isKibanaNodeVersionInstalled() {
#    INSTALL_VERSION=$(cat .nvmrc)
#    local IS_INSTALLED=$(nvm ls | grep $INSTALL_VERSION)
#    if [ -n "$IS_INSTALLED" ]; then
#        return 0
#    else
#        return 1
#    fi
#}
#
#function maybeInstallNodeJS() {
#    #  local INSTALL_VERSION=$(cat .nvmrc)
#    local INSTALL_VERSION=$(cat ../kibana/.nvmrc)
#
#    if ! isKibanaNodeVersionInstalled; then
#        echo "### Kibanas's node.js version [$INSTALL_VERSION] is NOT installed"
#        echo "### INSTALL $INSTALL_VERSION from kibana/.nvmrc"
#        nvm install $INSTALL_VERSION
#    fi
#
#    if isKibanaNodeVersionInUse; then
#        nvm use $INSTALL_VERSION
#    fi
#}

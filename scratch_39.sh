npm_install_global() {
#  npmRoot=$(npm root -g)
  packageRoot="${npmRoot:?}/$package"

}

npm_install_global

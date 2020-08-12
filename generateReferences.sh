#!/bin/bash

export MANIFEST_PATH=manifest-reference.json
export SETUP_WIZARD_PATH=setup-wizard-reference.json

# Fetches the latest manifest in Github without downloading the rest of the package
curl https://raw.githubusercontent.com/dappnode/DAppNodeSDK/master/src/schemas/manifest.schema.json > $MANIFEST_PATH
# Run the schema to markdown tool customized for the DAppNode docs repo
# -x - : supresses the output of the validated schema
# : the .md is outputed at the default 
npx git://github.com/dapplion/jsonschema2md.git -d $MANIFEST_PATH -x - -o docs
# Clean manifest schema
rm $MANIFEST_PATH

# Fetches the latest manifest in Github without downloading the rest of the package
curl https://raw.githubusercontent.com/dappnode/DAppNodeSDK/master/src/schemas/setup-wizard.schema.json > $SETUP_WIZARD_PATH
# Run the schema to markdown tool customized for the DAppNode docs repo
# -x - : supresses the output of the validated schema
# : the .md is outputed at the default 
npx git://github.com/dapplion/jsonschema2md.git -d $SETUP_WIZARD_PATH -x - -o docs
# Clean manifest schema
rm $SETUP_WIZARD_PATH

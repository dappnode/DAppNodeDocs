#!/usr/bin/env bash

# Install dependencies
python -m pip install --upgrade pip
pip install -r requirements.txt

# Build schema references
./generateReferences.sh

# Build docs
mkdocs build --site-dir site -v --clean

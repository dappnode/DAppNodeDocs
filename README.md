# DAppNode Docs

## Getting started

### Installation in Ubuntu

To contribute to this documentation, install these pre-requisites:

* pip
* pymdown-extension<6.3
* markdown<3.2
* mkdocs
* mkdocs-material
* git

Linux systems should have pip installed by default, you can check if it's installed in your environment with the command:

~~~
pip --version
~~~

The easiest way to install mkdocs, mkdocs-material and their dependencies is with the command:

~~~
python -m pip install "pymdown-extensions<6.3" "markdown<3.2" mkdocs mkdocs-material
~~~

The command above installs the dependencies of the mkdocs-material theme correctly. If you install mkdocs-material directly, pip will automatically install the latest version of pymdown and markdown, which are both incompatible with the mkdocs-material theme.

The next step is to download the repository and access to the main directory:

~~~
git clone https://github.com/dappnode/DAppNodeDocs.git  &&  cd DAppNodeDocs/
~~~

Then, you can start a local webserver that will build and update the docs automatically everytime you change and save a file:

~~~
mkdocs serve
~~~

![Result of the command mkdocs serve](./docs/images/mkdocs_serve_result.png)

Now you can edit the project locally in real time and check the changes on the URL <code>127.0.0.1:8000</code>.

### Common Errors on Ubuntu installation

#### Reload the environment variables after installation

If you have installed mkdocs and `mkdocs serve` doesn't work, try to reload the <code>.bashrc</code> file, the next command execute that file and actualize the environment variables, maybe mkdocs was installed but it does not actualize the environment variables.

~~~
source  ~/.bashrc
~~~


### MacOs Installation

[Install mkdocs](https://www.mkdocs.org/#installation). In the case of MacOS you can do so with Homebrew

```
brew install mkdocs
```

Then run a local server to have a live auto-refresh preview of the docs

```
mkdocs serve
```

Now navigate to http://127.0.0.1:8000/

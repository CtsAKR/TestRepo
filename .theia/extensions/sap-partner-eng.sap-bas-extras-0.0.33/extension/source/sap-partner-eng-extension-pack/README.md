The SAP Partner Engineering Extension Pack is a set of extensions that enhance the experience of working with [Business Application Studio](https://www.anaconda.com/distribution/) a cloud based development IDE and [VSCodium](https://vscodium.com/) or [VSCode](https://code.visualstudio.com/) locally.

It includes the following set of extensions:

 - Microsoft Python Extensions: [ms-python.python](https://open-vsx.org/extension/ms-python/python)
 - RedHat Yaml Support: [redhat.vscode-yaml](https://open-vsx.org/extension/redhat/vscode-yaml)
 - SAP Partner Engineering Installer: [sap-partner-eng.bas-installer-extension](https://open-vsx.org/extension/sap-partner-eng/bas-installer-extension)


## Python 2.9.0 Install

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install Python__.  Open up the output and select the __Python Installer__ occurrence to see that it completed without issues.  Then verify that python is available by opening a new terminal and issuing the command.

```
python -V
```

<img src=https://blogs.sap.com/wp-content/uploads/2021/01/partner_eng_inst_python.gif width=582 height=346 />
ß

## Post Python Install Setup

## Select Python Interpreter

Open the command palette with __View -> Find Command...__ and search for __Python:__.  Run the __Python: Select Interpreter__ command and select __/home/user/python_3_9_0/bin/python__.



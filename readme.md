![fileable logo](./static/docs/logo.png)

# Fileable Components

Components for use with [Fileable](https://github.com/johnhenry/fileable).

## List of Fileable components

- [File](https://github.com/johnhenry/fileable-component-file) - create files
- [Folder](https://github.com/johnhenry/fileable-component-folder) - create folders and archives
- [Clear](https://github.com/johnhenry/fileable-component-clear) - remove files and folders

## Creating a Fileable Component

Creating fileable components is easy. Components must meet the following criteria.

1. Must be an asynchronous iterator yielding objects conforming to the "Fileable Component Protocol" (see below)

2. Must have key 'FILEABLE COMPONENT' set to true.

### Method: createComponent

This repository exports a convenience method, createComponent, to make this easier setting the above key easier.

```javascript
import {createComponent} from 'fileable-components';
const prototypeCompoent = async function *(){
    //...
}
export default createComponent(prototypeCompoent);
```

### Fileable Component Protocol

Fileable components must yield objects containing a 'directive' key -- along with other keys -- that and tells the renderer how to render the desired file tree.

### directive: FILE

The FILE is used to create files.

See the above File component for an example.

#### key: name

Name of file to create.

#### key: content

Content of file to create.

#### key: mode

Mode of file to create.

#### key: append

If set to true, content will be added to a file. Othewise, content will be ovewrwriten.

#### key: folder_context

Context in which to create file.

### Directive: FOLDER

The FOLDER is used to create folders.

See the above Folder component for an example.

#### key: name

Name of folder to create.

#### key: folder_context

Context in which to create folder.

### Directive: CLEAR

The CLEAR is used to delete files and folders.

See the above Clear component for an example.

#### key: target

String representing files or folders to delete.
May be a [glob](https://github.com/isaacs/node-glob) pattern.
May use '!' to negate files.

#### key: folder_context

Context in which to delete targets.
## API

### Table of contents
## Todo

- remove unnecessary dependencies
- add proper typescript typeings
- create template component

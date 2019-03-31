# Fileable Components

Components for Fileable
## API

### Table of contents

- [function Clear](#function-clear)
  - [Examples](#examples)
- [function File](#function-file)
  - [Examples](#examples-1)
- [function Folder](#function-folder)
  - [Examples](#examples-2)
- [function iterator](#function-iterator)
  - [Examples](#examples-3)

### function Clear

Clear Component

#### Examples

> ```javascript
>  // template.jsx
>  import {File, Folder, Clear} from 'fileable';
>  export () => <Clear><Folder name='project'><File name='readme.md'/></Folder></Clear>
> ```

* * *

### function File

File component

#### Examples

> ```javascript
> // template.jsx
>  import {File} from 'fileable';
>  export () => <File name='readme.md'/>
> ```

* * *

### function Folder

Folder component

#### Examples

> ```javascript
>  // template.jsx
>  import {File, Folder} from 'fileable';
>  export () => <Folder name='project'><File name='readme.md'/></Folder>
> ```

* * *

### function iterator

Iterator

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `input`   | object |             |

#### Examples

> ```javascript
> import {iterator} from 'fileable';
> ```

## Todo

- Asynchronous content
    - Useful for extending
- Make work like described API in readme.
- Handle newline trickiness
    - inability to insert new lines easily
    - must manually add "{'\n'}" or enclose entirely witin backticks ("'``'")
- Eventually, get remote files working with using dynamic imports

---
title: 小记｜GPG签名异常
published: 2024-11-17
description: '签名遇到No such file or directory.'
image: ''
tags: ['random', 'gpg', 'pinentry-mac']
category: '学习笔记'
draft: true 
---
像往常一样`git commit`，结果vscode提示如下报错
```zsh
[GNUPG:] BEGIN_SIGNING H8
[GNUPG:] PINENTRY_LAUNCHED 64299 curses 1.3.1 not a tty xterm-256color-? 501/200
gpg: signing failed: No such file or directory
[GNUPG:] FAILURE sign 83918929
gpg: signing failed: No such file or directory
fatal: failed to write commit object
```
## 0x01 问题排查

## 0x02 解决方案
---

title: "Some useful command"
category: "Wiki"
date: "2020-02-24"
tags:
    - Raspberry Pi
    - Linux

---

## Check SSH Connection Tries

```bash
// Failed
cat /var/log/auth.log | grep 'Failed password'

// Successful
cat /var/log/auth.log | grep 'Accepted password'
```


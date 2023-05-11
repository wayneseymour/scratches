find . -type f -exec grep -F '\-?estf\-?' /dev/null {} +



find . -type f -exec grep -H -F '-?estf-?' {} +

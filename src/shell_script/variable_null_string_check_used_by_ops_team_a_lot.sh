# This form is often used in conditional tests, for instance in this one:
[ -z "${COLUMNS:-}" ] && COLUMNS=80

# It is a shorter notation for
if [ -z "${COLUMNS:-}" ]; then
	COLUMNS=80
fi

 x-pack/test/accessibility/apps/search_sessions.ts:55:21 - error TS2322: Type 'Promise<WebElementWrapper>' is not assignable to type 'Promise<boolean>'.
 proc [tsc]   Type 'WebElementWrapper' is not assignable to type 'boolean'.
 proc [tsc]
 proc [tsc] 55         async () => await find.byCssSelector('[title="dashboards"]')
 proc [tsc]                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 proc [tsc]
 proc [tsc]   test/target/types/common/services/retry/retry.d.ts:8:41
 proc [tsc]     8     waitFor(description: string, block: () => Promise<boolean>, onFailureBlock?: () => Promise<any>): Promise<void>;
 proc [tsc]                                               ~~~~~~~~~~~~~~~~~~~~~~
 proc [tsc]     The expected type comes from the return type of this signature.
 proc [tsc]
 proc [tsc]
 proc [tsc] Found 1 error.

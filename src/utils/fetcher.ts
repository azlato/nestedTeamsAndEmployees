type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

const fetcher = (...args: ArgumentTypes<typeof fetch>) => fetch(...args).then((res) => res.json());

export default fetcher;

import { flow, pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import * as TE from "fp-ts/lib/TaskEither";

import TaskEither = TE.TaskEither;

const animals = [
  { name: "giraffe", type: "mammal" },
  { name: "elephant", type: "mammal" },
  { name: "crocodile", type: "reptile" },
  { name: "emu", type: "bird" },
  { name: "gecko", type: "reptile" }
];

const reptilesWithGWikipediaArticles: TaskEither<Error, WikipediaArticle[]> = pipe(
  animals,
  A.filterMap(
    flow(
      option.some,
      option.filter(a => a.class === "reptile" && a.name.startsWith("g")),
      option.map(fetchWikipediaArticle)
    )
  ),
  A.sequence(TE.taskEither)
);

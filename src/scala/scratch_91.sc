import java.io.File

def f() = "/some/path"
val xs =
  "simulation.log.txt" :: "testRun.txt" :: "response.log.txt" :: "global_stats.json" :: Nil
//  xs.map(x => s"${f()}/${x}")
//    .map(x => new File(x).getAbsolutePath)
for {
    x <- xs
    s"${x}" <- x
  } yield (simLogFilePath, testRunFilePath, responseFilePath, statsFilePath)

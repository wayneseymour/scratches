import scala.util.Failure
import scala.util.Success
import scala.util.Try
import scala.util.Either

def dataStreamName(): Either[String, String] = {
  val res = System.getenv("DATA_STREAM_NAME")
  if (res == null) return Left("env var not found")
  Right(res)
}

dataStreamName().fold(
  e => println(s"\n### left e: \n\t${e}"),
  x => println(s"\n### right x: \n\t${x}")
)

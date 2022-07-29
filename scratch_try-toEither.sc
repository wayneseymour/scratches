import scala.util.Failure
import scala.util.Success
import scala.util.Try

def ug = () => throw new Exception("ugga")
def try1():Try[String] =
    Try(ug())
def try2():Try[String] =
  Try((() => "yo")())

try1() match {
  case Success(x) => println("yes")
  case Failure(_) => println("ug() === no")
}
try2() match {
  case Success(x) => println("yo fn === yes")
  case Failure(_) => println("no")
}
try1().toEither.fold(
  x => println(s"\n### left x: \n\t${x}"),
  x => println(s"\n### right x: \n\t${x}")
)

try2().toEither.fold(
  x => println(s"\n### left x: \n\t${x}"),
  x => println(s"\n### right x: \n\t${x}")
)

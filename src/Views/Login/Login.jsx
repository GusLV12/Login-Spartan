import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full"
    style={{
      background: "radial-gradient(circle at center, #0569cd, #002d5a, #001430)",
    }}>
      <div className="flex w-full h-[150px] md:h-[300px] m-6 md:m-12 justify-center items-center">
        <img src="/public/logo.png" alt="Spartan" className="w-[450px] md:w-[800px]" style={{ aspectRatio: "16/9", objectFit: "contain" }} />
      </div>
      <Card className="w-[90%] max-w-[550px] z-10 bg-transparent backdrop-blur-lg border-none">
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-white">Email / Número Tel.</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="nombre@ejemplo.com" 
                  required 
                  className="bg-white text-black border-none focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-white">Contraseña</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-white text-black border-none focus:border-none focus:outline-none"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-customBlue text-white hover:bg-customBlueStrong">Entrar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

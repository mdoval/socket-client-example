import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ingresarAlChat } from "@/lib/socket-client-actions"

const LoginForm = () => {
  return (
    <form className="p-32 m-auto border shadow-md flex flex-col space-y-4" action={ingresarAlChat}>
     <Input type="text" name="nombre" id="nombre" placeholder="Nombre" />
     <Button type="submit">Ingresar</Button>
    </form>
  )
}

export default LoginForm
import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

function App() {
  return (
    <div className=' w-screen h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center'>
      <header className='flex flex-col items-center gap-2 '>
        <Logo />

        <Heading size="lg">
          Ignite Lab
        </Heading>

        <Text className='text-gray-400'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='w-[380px] flex flex-col gap-4 items-stretch mt-12'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Endereço de e-mail:
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input placeholder='Digite seu e-mail' type='email' />
          </TextInput.Root>

        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Sua senha:
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder='********' type='password' />
          </TextInput.Root>

        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias.</Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size='sm' asChild>
          <a href="#" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha</a>
        </Text>

        <Text size='sm' asChild>
          <a href="#" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  )
}

export default App

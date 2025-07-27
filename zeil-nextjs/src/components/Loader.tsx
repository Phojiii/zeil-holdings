interface LoaderProps {
  isLoading: boolean
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <div id="loader" className={isLoading ? '' : 'hidden'}>
      Loading...
    </div>
  )
} 
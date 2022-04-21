import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      <SiteHeading>Jada's Mochi Donuts</SiteHeading>

      <Products submitTarget='/checkout' enabled={true} />
    </div>
  )
}

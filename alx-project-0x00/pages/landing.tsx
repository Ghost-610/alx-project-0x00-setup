import Card from "@/components/Card"
import Button from "@/components/Button"; // ✅ Add this import
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />


      {/* ✅ Add Button */}
      <div className="mt-6">
        <Button title="Click Me" />
      </div>
    </div>
  )
}
export default Landing
import Link from "next/link";

export default function Admin(){
  return(
    <div>
      <h1>Admin Dashboard</h1>
      <Link href="/admin/add-product">Add Product</Link><br/>
      <Link href="/admin/orders">View Orders</Link>
    </div>
  )
}

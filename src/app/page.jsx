import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="p-6 space-y-3">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="text-gray-700">
        Welcome to the home page of the next.js application.Here you can find various resources and links to navigate through app
      </p>
      <Link href="/dashboard" className="text-blue-500 hover:underline"> Go to DashBoard</Link>
      <Link href="/login" className="text-blue-500 hover:underline"> Go to Login</Link>
      <Link href="/admin/users" className="text-blue-500 hover:underline"> Go to Admin Users</Link>
      <Link href="/task/123" className="text-blue-500 hover:underline"> Go to Task 123</Link>
     
    </div>    
        
  );
}

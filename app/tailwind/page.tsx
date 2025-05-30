export default function TailwindPage() {
  return (
    <div className="text-center">
      <p className="my-2 shadow-sm bg-gray-400 rounded-3xl">Margin</p>
      <p className="text-pink-300 bg-purple-500 shadow-md rounded-3xl">
        Content
      </p>
      <p className="bg-blue-900 text-white rounded-3xl">Content</p>
      <div>
        <p className="py-8 bg-green-300 text-blue-300 rounded-3xl">Padding</p>
      </div>
      <div className="flex m-10 border-1 border-black">
        {/* Parent Container */}
        <div className="m-2 border-1 border-red-500 hover:bg-red-900 rounded-xl p-2">
          {/* Child 1 */}
          <p>Grandchild #1</p>
        </div>
        <div className="m-2 border-1 border-green-500 justify-between w-96 hover:bg-green-900 rounded-xl p-2">
          {/* Child 2 */}
          <p>Grandchild #2</p>
          <p>Content</p>
          <p>Content</p>
          <p>Image</p>
          <p>Image</p>
          <p>Link</p>
        </div>
        <div className="m-2 border-1 border-blue-500 hover:bg-blue-900 rounded-xl p-2">
          {/* Child 3 */}
          <p>Grandchild #3</p>
        </div>
      </div>
    </div>
  );
}

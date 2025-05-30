export default function ClientPage() {
  return (
    <>
      <div className="flex flex-wrap border-1 border-black">
        {/* parent div */}

        <div className="max-w-full flex border-1 border-black justify-between">
          {/* child #1 OR image block */}

          <img alt="cow" className="h-auto md:max-w-sm" src="#" />

          <img
            alt="lion"
            className="h-auto md:max-w-sm m-5 p-5"
            src="https://images.unsplash.com/photo-1545137418-4f1e60820cd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <img alt="turtle" className="h-auto md:max-w-sm" src="#" />
        </div>

        <div className="flex border-1 border-black">
          {/* child #2 OR image block */}

          <img alt="#" src="#" />

          <img alt="#" src="#" />

          <img alt="#" src="#" />
        </div>

        <div className=" flex border-1 border-black">
          {/* child #3 OR text block */}

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum
            similique amet numquam ducimus illo unde libero totam ut fugiat.
            Nobis illo quasi ex dicta asperiores odio laboriosam maxime sed.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
            adipisci labore veritatis eum aliquam quo facere aliquid tempora
            aperiam sunt eveniet totam optio tempore cum, debitis assumenda id!
            Tenetur.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            consectetur doloremque? Eaque esse vero fuga voluptas architecto
            quia quis atque cumque necessitatibus, expedita culpa corporis ea,
            suscipit doloribus, sint repellendus?
          </p>
        </div>
      </div>
    </>
  );
}

interface Productos {

  id ?: string;
  
    name: string;
    precio: number;
    categoria: string;
}

const data: Productos[] = [
  { name: "Laptop", precio: 50, categoria: "Tecnologia" },
  { name: "Pc gamer",precio: 20, categoria: "Tecnologia" },
  { name: "Smart Watch",precio: 30, categoria:"Tecnologia"},
];

const dataWithIds = data.map(user=> {
  user.id = crypto.randomUUID();
  return user;
})

console.log(dataWithIds);
function App() {
  return (
    <>
  <h1>Productos</h1>
  <ol>
  {dataWithIds.map((user) =>{
    return <li key={user.id}>{user.name}{user.precio}</li>;
  })}
  </ol>
   </>
  );
}

export default App;

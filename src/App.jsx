const users = [
  {
    id: 1,
    name: 'Alessio',
    surname: 'Caringella',
    pathImg: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
    imgSize: 90,
  },
  {
    id: 2,
    name: 'Alberto',
    surname: 'Cetignola',
    pathImg: 'https://media.internazionale.it/images/2016/02/04/120867-md.jpg',
    imgSize: 90,
  },
  {
    id: 3,
    name: 'Giuseppe',
    surname: 'Scarano',
    pathImg: 'https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg',
    imgSize: 90,
  },
  {
    id: 4,
    name: 'Antonio',
    surname: 'Rossi',
    pathImg: 'https://st4.depositphotos.com/3433891/27213/i/450/depositphotos_272138564-stock-photo-young-handsome-man-bricks-wall.jpg',
    imgSize: 90,
  },
];


function App() {

  return (
    <>
      <ul className="divide-y divide-gray-200">
        <h1 className="text-2xl py-3 ps-2">Utenti Del Mio Array</h1>
        {users.map((user) => (
          <li key={ user.id } className="py-4 flex items-center">
            <img 
            className="avatar"
            style={{
              width: user.imgSize,
              height: user.imgSize
            }}
            src={ user.pathImg } 
            alt={ 'profile image of' + user.name } 
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{ user.name }</p>
              <p className="text-sm text-gray-500">{ user.surname }</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

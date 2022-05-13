import {useEffect, useState} from 'react';
function App() {
  let info = [
    {
      id: 1,
      key: 1,
      img: "https://svgshare.com/i/gxC.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 2,
      key: 2,
      img: "https://svgshare.com/i/gwL.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 3,
      key: 3,
      img: "https://svgshare.com/i/guy.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 4,
      key: 4,
      img: "https://svgshare.com/i/gxD.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 5,
      key: 5,
      img: "https://svgshare.com/i/gvc.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 6,
      key: 6,
      img: "https://svgshare.com/i/gvd.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 7,
      key: 7,
      img: "https://svgshare.com/i/gx5.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 8,
      key: 8,
      img: "https://svgshare.com/i/gw9.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 1,
      key: 9,
      img: "https://svgshare.com/i/gxC.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 2,
      key: 10,
      img: "https://svgshare.com/i/gwL.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 3,
      key: 11,
      img: "https://svgshare.com/i/guy.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 4,
      key: 12,
      img: "https://svgshare.com/i/gxD.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 5,
      key: 13,
      img: "https://svgshare.com/i/gvc.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 6,
      key: 14,
      img: "https://svgshare.com/i/gvd.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 7,
      key: 15,
      img: "https://svgshare.com/i/gx5.svg",
      status: "hidden",
      completed: false
    },
    {
      id: 8,
      key: 16,
      img: "https://svgshare.com/i/gw9.svg",
      status: "hidden",
      completed: false
    }
  ];
  const [data, setData] = useState(info.sort(() => Math.random() - 0.5))
  const [first, setFirst] = useState(false);
  const [firstKey, setFirstKey] = useState(false);
  const [second, setSecond] = useState(false);
  const [score, setScore] = useState(0);
  let changeStatus = (id, key) => {
    setData(data.map(item => {
      if(item.key == key) {
        item.status = "active"
      }
      return item
    }))
    return id;
  }

  let spinCont = (key) => {
    setData(data.map(item => {
      if(item.key == key) {
        item.status = "hidden"
      }
      return item
    }))
  }

  let handleClick = (id, key) => {
    if(first == false) {
      setFirst(changeStatus(id, key))
      setFirstKey(key)
    } else if(second == false && key !== firstKey) {
      changeStatus(id, key)
      setSecond(id)
      if(first == id) {
        setScore(score + 1)
        setTimeout(() => {
          setData(data.filter(item => item.id != id))
        }, 400)
        setFirst(false);
        setSecond(false);
        setFirstKey(false);
      } else {
        setTimeout(() => {
          spinCont(firstKey)
          spinCont(key)
          setFirst(false);
          setSecond(false);
          setFirstKey(false);
        }, 400)
      }
    }
  }

  let replay = () => {
    window.location.reload(false);

  }

  return (
    <div className="App">
      <p style={{position: "absolute"}}>{score}</p>
      <div className="container">
        {score == 8 ? (
          <div>
            <h1>Win!</h1>
            <button onClick={replay}>Replay</button>
          </div>
        ) : null}
        {data.map(item => (
          <div className={"cont " + item.status} key={item.key} onClick={() => handleClick(item.id, item.key)}>
            <img src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

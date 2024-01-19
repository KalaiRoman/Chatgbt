import './App.scss';

function App() {
  return (
    <div className="main-section">
      <div className='inside-main-section'>
        <div className='sidebar'>
          sidebar messages install datas
        </div>
        <div className='body-section'>
          <div className='inside-body-section'>
            <div className='message-body'>
              {Array(20).fill("kalai").map((item, index) => {
                return (
                  <div key={index} className={index === 0 ? "chatuser mt-3 mb-4" : "chat mt-3 mb-4"}>
                    <div>
                      <div>
                        kalai
                      </div>
                      <div>
                        kalai
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="input-box">
              input box
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

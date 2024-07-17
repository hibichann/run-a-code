import { getConfig } from '../uitls/utils'
import { useEffect,useState } from 'react'
import "../style.css"
function IndexPopup() {
  const [list, setList] = useState([]);
  console.log('ren');
  useEffect(()=>{
    const fetchData = async () => {
      const storedData = await getConfig()
      console.log('storedData',storedData);
      setList(storedData.list)
    };
    fetchData();
  },[])
  const executeScript = (script: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab?.id !== undefined) {
        chrome.runtime.sendMessage({
          action: "executeScript",
          tabId: activeTab.id,
          script
        });
      }
    });
  }; 
  return (
    <div className='p-4'>
        {list.map(item=>{
          return <div className="mb-1 bg-gray-400 p-1 w-44 cursor-pointer select-none text-blue-100 rounded-sm	text-lg "
          onClick={()=>executeScript(item.code)}
          >
           {item.title}
          </div>
        })}
    </div>
  )
}

export default IndexPopup

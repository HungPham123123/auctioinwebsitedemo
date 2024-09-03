
import Userpage from "../Userpage";

function Usermessage() {


    return(
        <div>
            <Userpage />
        <div class="tab-pane active" id="Inbox">
        <div class="no-message-inbox-container">
          <h2>No Messages</h2>
          <p>Messages and notifications from Nike will show up here.</p>
        </div>
      </div>
      </div>
    )
}

export default Usermessage
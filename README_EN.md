# Configuration Guide: Call of Duty Black Ops (Plutonium) with Nucleus Co-op

## Installation and Setup Steps

1. **Install Nucleus Co-op:** Download it from [nucleus-coop.github.io](https://nucleus-coop.github.io/) and install it directly to the **root of your drive** (e.g., `C:\NucleusApp`).
2. **Modify the Launcher:** Right-click the Nucleus Co-op executable, go to **Properties**, and check the option to always **Run as administrator**.
3. **Install Plutonium:** Download and install the client from [plutonium.pw](https://plutonium.pw/).
4. **Initial Game Setup:** * Open Call of Duty through Plutonium.
   * Enable the **gamepad** and set the display to **Windowed Mode**.
5. **Save Configuration:** Close the game by clicking **Exit** or by typing `writeconfig` in the console and closing the game. 
   > **Note:** If you close it via Task Manager or the "X" button (Alt+Tab), the settings will NOT be saved.
6. **Sync Profiles:** Copy the `player` folder located in:
   `%localappdata%\Plutonium\storage\t5`
   and paste it into:
   `C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Black Ops`
7. **Install the Handler:** Extract the downloaded handler into the folder:
   `C:\NucleusApp\handlers`
8. **Handler Configuration:** Copy the `player` folder found in `%localappdata%\Plutonium\storage\t5` to the following path:
   `C:\NucleusApp\handlers\Call of Duty Black Ops\Plutonium\storage\t5`
9. **Link the Game:** Open Nucleus Co-op, click the **search icon (magnifying glass)**, and locate the `BlackOps.exe` file in your game folder.
10. **Controller Assignment:** On the left side, select Call of Duty and add the controllers you intend to use.
11. **Final Settings:** Click **NEXT** (on the right side of the screen) and select the number of players, **FPS**, and **FOV**.
12. **Run:** Click **PLAY**.

---

## Keyboard / Controller Shortcuts
- **Join Match:** `F2` / `SELECT + START`
- **Restart Match:** `F3` / `SELECT + TRIANGLE (Y)`
- **Close Game:** `CTRL + Q`
- **Minimize Screens:** `CTRL + T`
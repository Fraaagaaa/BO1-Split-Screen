var a_fps = ["125", "250", "144", "240", "120", "60", "30", "0"];
var a_fov = ["90", "100", "110", "65", "80"];
var a_players = ["2", "3", "4"];
Game.AddOption("Select the number of players", "", "Players", a_players);
Game.AddOption("Select the FPS Cap the game will use", "", "FPS", a_fps);
Game.AddOption("Select your preferred FOV", "", "FOV", a_fov);
Game.FileSymlinkExclusions = ["d3d11.dll", "Xinputplus.ini", "xinput1_4.dll", "xinput1_3.dll"];
Game.FileSymlinkCopyInstead = ["localization.txt", "cod.bmp", "codlogo.bmp", "version.inf", "BlackOpsMP.exe", "binkw32.dll", "imgui.ini", "installscript.vdf"];
Game.DirExclusions = ["players", "mods"];
Game.HandlerInterval = 100; 
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.UseNucleusEnvironment = true;
Game.SupportsKeyboard = false; 
Game.ExecutableName = "BlackOps.exe";
Game.LauncherExe = "Plutonium/launch.bat";
Game.LauncherExeIgnoreFileCheck = true;
Game.BinariesFolder = "";
Game.SteamID = "42700"; 
Game.GUID = "Call of Duty Black Ops"; 
Game.GameName = "Call of Duty Black Ops"; 
Game.MaxPlayersOneMonitor = 4; 
Game.MaxPlayers = 4;
Game.Hook.ForceFocus = true;
Game.HasDynamicWindowTitle = false;
Game.HookFocus = false;
Game.FakeFocus = false;
Game.FakeFocusSendActivate = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.UseAlpha8CustomDll = false;
Game.InjectHookXinput = false;
Game.PromptBetweenInstances = false;
Game.ProcessChangesAtEnd = false;
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 0; 
Game.PauseBetweenContextAndLaunch = 5;
Game.ResetWindows = true;
Game.SetWindowHookStart = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.SetForegroundWindowElsewhere = false;
Game.NotTopMost = false;
Game.SetTopMostAtEnd = true;
Game.KillProcessesOnClose = ['connect', 'cmd', 'AutoIt3', 'JoyToKey'];

// Game.Description = "";

Game.SupportsMultipleKeyboardsAndMice = true;

Game.Play = function()
{
    Game.HookSetCursorPos = false;
    Game.HookGetCursorPos = false;
    Game.HookGetKeyState = false;
    Game.HookGetAsyncKeyState = false;
    Game.HookGetKeyboardState = false;
    Game.HookFilterRawInput = false;
    Game.HookFilterMouseMessages = false;
    Game.HookUseLegacyInput = false;
    Game.HookDontUpdateLegacyInMouseMsg = false;
    Game.HookMouseVisibility = false;
    Game.SendNormalMouseInput = false;
    Game.SendNormalKeyboardInput = false;
    Game.SendScrollWheel = false;
    Game.ForwardRawKeyboardInput = false;
    Game.ForwardRawMouseInput = false;
    Game.DrawFakeMouseCursor = false;
    Game.LockInputAtStart = false;
    Game.LockInputSuspendsExplorer = false;
    Game.LockInputToggleKey = 0x23;


    Context.RunAdditionalFiles([Context.ScriptFolder + "\\start.bat"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F4Swap.bat"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F3Restart.bat"], false, 10);

    var base = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
    var documents = Context.GetFolder(Nucleus.Folder.Documents)

    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\bin\\games");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\games");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\main");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\demonware\\18301\\pub");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\demonware\\18301\\user");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\raw\\scripts\\mp");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\raw\\scripts\\sp");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\players\\mods");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\scripts\\sp\\zom");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\zone");
    System.IO.Directory.CreateDirectory(base + "\\Plutonium\\storage\\t5\\mods");

    System.IO.Directory.CreateDirectory(documents + "\\My Mods");
    System.IO.Directory.CreateDirectory(documents + "\\My Mods\\SpecialK");
    System.IO.Directory.CreateDirectory(documents + "\\My Mods\\SpecialK\\Global");

    var plutPath = System.IO.Path.Combine(base, "Plutonium");

    function copyFile(srcRel, dstRel)
    {
        var src = System.IO.Path.Combine(Game.Folder, srcRel);
        var dst = base + dstRel;

        var dir = System.IO.Path.GetDirectoryName(dst);
        System.IO.Directory.CreateDirectory(dir);

        System.IO.File.Copy(src, dst, true);
    }


    if (!System.IO.File.Exists("Plutonium\\storage\\t5\\players\\config.cfg"))
    {
        var assetFiles = [
            ["Plutonium\\storage\\t5\\players\\config.cfg", "\\Plutonium\\storage\\t5\\players\\config.cfg"],
            ["Plutonium\\storage\\t5\\main\\iw_42.iwd", "\\Plutonium\\storage\\t5\\main\\iw_42.iwd"],
            ["Plutonium\\bin\\AppCore.dll", "\\Plutonium\\bin\\AppCore.dll"],
            ["Plutonium\\bin\\discord_game_sdk.dll", "\\Plutonium\\bin\\discord_game_sdk.dll"],
            ["Plutonium\\bin\\plutonium-bootstrapper-win32.exe", "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe"],
            ["Plutonium\\bin\\plutonium-launcher-win32.exe", "\\Plutonium\\bin\\plutonium-launcher-win32.exe"],
            ["Plutonium\\bin\\Ultralight.dll", "\\Plutonium\\bin\\Ultralight.dll"],
            ["Plutonium\\bin\\UltralightCore.dll", "\\Plutonium\\bin\\UltralightCore.dll"],
            ["Plutonium\\bin\\WebCore.dll", "\\Plutonium\\bin\\WebCore.dll"],
            ["Plutonium\\bin\\steam_api64.dll", "\\Plutonium\\bin\\steam_api64.dll"],
            ["Plutonium\\bin\\VibeCheck.exe", "\\Plutonium\\bin\\VibeCheck.exe"],
            ["Plutonium\\games\\t5sp.exe", "\\Plutonium\\games\\t5sp.exe"],
            ["Plutonium\\games\\t5sp.exe", "\\Plutonium\\bin\\games\\t5sp.exe"],
            ["Plutonium\\storage\\t5\\raw\\scripts\\sp\\zm_spawn_fix.gsc", "\\Plutonium\\storage\\t5\\raw\\scripts\\sp\\zm_spawn_fix.gsc"],
            ["Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc", "\\Plutonium\\storage\\t5\\scripts\\sp\\zom\\zm_spawn_fix.gsc"],
            ["Plutonium\\storage\\t5\\scripts\\sp\\zom\\waffe.gsc", "\\Plutonium\\storage\\t5\\scripts\\sp\\zom\\waffe.gsc"],
            ["Plutonium\\storage\\t5\\zone\\en_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\en_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\fr_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\fr_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\ge_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\ge_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\it_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\it_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\ja_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\ja_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\po_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\po_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\ru_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\ru_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\sp_plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\sp_plutonium_ui.ff"],
            ["Plutonium\\storage\\t5\\zone\\frontend_patch.ff", "\\Plutonium\\storage\\t5\\zone\\frontend_patch.ff"],
            ["Plutonium\\storage\\t5\\zone\\plutonium_ui.ff", "\\Plutonium\\storage\\t5\\zone\\plutonium_ui.ff"],
            ["Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_sp_english.wad", "\\Plutonium\\storage\\demonware\\18301\\pub\\online_tu14_sp_english.wad"],
            ["binkw32.dll", "\\Plutonium\\bin\\binkw32.dll"],
            ["binkw32.dll", "\\Plutonium\\games\\binkw32.dll"]
        ];

        for (var i = 0; i < assetFiles.length; i++) copyFile(assetFiles[i][0], assetFiles[i][1]);
    }
    var batFiles = ["start.bat", "F4Swap.bat", "F3RestartMP.bat", "F2HostMP.bat", "F2Guest.bat", "F3Restart.bat", "F2Host.bat"];
    for(var i=0; i<batFiles.length; i++)
    {
        var bPath = System.IO.Path.Combine(Context.ScriptFolder, batFiles[i]);
        if(System.IO.File.Exists(bPath)) Context.RunAdditionalFiles([bPath], false, 10);
    }


    var instancedFolder = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
    var sourceFile = System.IO.Path.Combine(Game.Folder, "binkw32.dll");
    var destFile = System.IO.Path.Combine(instancedFolder, "binkw32.dll");
    System.IO.File.Copy(sourceFile, destFile, true);
    var sourceFile = System.IO.Path.Combine(Game.Folder, "localization.txt");
    var destFile = System.IO.Path.Combine(instancedFolder, "localization.txt");
    System.IO.File.Copy(sourceFile, destFile, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global\\osd.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "osd.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\d3d11.dll")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\d3d11.dll");
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "SpecialK\\d3d11.dll");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\d3d11.ini")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini");
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "SpecialK\\d3d11.ini");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
    }

    var d3d11_path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
    var dict = [Context.FindLineNumberInTextFile(d3d11_path, "SlotReassignment=", Nucleus.SearchType.StartsWith) + "|SlotReassignment=" + Context.PlayerID + ""];
    Context.ReplaceLinesInTextFile(d3d11_path, dict);

    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\winject32.exe")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\winject32.exe");
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "winject32.exe");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
    }

    Game.ExecutableName = "plutonium-bootstrapper-win32.exe";

    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F10Overlay.bat"], false, 10);

    Game.Hook.ForceFocusWindowName = "Call of Duty Black Ops " + Context.PlayerID; 
    Game.LauncherTitle = "Call of Duty Black Ops" + Context.PlayerID;

    if (Context.NumberOfPlayers < 5)
    {
        var d3d11_path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";

        var enabled, disabledToGame, dontHook, renderBg;

        if (Context.HasKeyboardPlayer)
        {
            enabled = "false";
            disabledToGame = "false";
            dontHook = "true";
            renderBg = "false";
        }
        else
        {
            enabled = "true";
            disabledToGame = "true";
            dontHook = "false";
            renderBg = "true";
        }

        var dict = [
            Context.FindLineNumberInTextFile(d3d11_path, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=" + enabled,
            Context.FindLineNumberInTextFile(d3d11_path, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=" + disabledToGame,
            Context.FindLineNumberInTextFile(d3d11_path, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=" + dontHook,
            Context.FindLineNumberInTextFile(d3d11_path, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=" + renderBg,
        ];

        Context.ReplaceLinesInTextFile(d3d11_path, dict);
    }

    var Players = Context.Options["Players"];


    var Bat = System.IO.Path.Combine(plutPath, "launcher.bat");

    var winjectCmd = "";
    if (System.IO.File.Exists(System.IO.Path.Combine(plutPath, "winject32.exe")))
    {
        winjectCmd = 'CALL "' + plutPath + '\\winject32.exe" d3d11.dll -s "bin\\plutonium-bootstrapper-win32.exe"';
    }
    else
    {
        winjectCmd = 'START "" "bin\\plutonium-bootstrapper-win32.exe"';
    }

    var lines = [ winjectCmd + ' t5sp "' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '" -name "' + Context.Nickname + '" -nocurses -lan +set sp_minplayers "' + Players + '" -offline'];
    Context.WriteTextFile(Bat, lines); 
    Context.RunAdditionalFiles(["all|" + Bat], false, 0);

    var FPS = Context.Options["FPS"];
    var FOV = Context.Options["FOV"];

    var cfg = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Plutonium\\storage\\t5\\players\\config.cfg';
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta cg_fov", Nucleus.SearchType.StartsWith) + '|seta cg_fov "' + FOV + '"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta cg_fov_default", Nucleus.SearchType.StartsWith) + '|seta cg_fov_default "' + FOV + '"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta cg_mature", Nucleus.SearchType.StartsWith) + '|seta cg_mature "0"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta cg_blood", Nucleus.SearchType.StartsWith) + '|seta cg_blood "0"',], 'utf-8');

    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta cl_timeout", Nucleus.SearchType.StartsWith) + '|seta cl_timeout "3600"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta sv_timeout", Nucleus.SearchType.StartsWith) + '|seta sv_timeout "1800"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta cl_connectTimeout", Nucleus.SearchType.StartsWith) + '|seta cl_connectTimeout "3600"',], 'utf-8');
    Context.ReplaceLinesInTextFile(cfg, [Context.FindLineNumberInTextFile(cfg, "seta sv_connectTimeout", Nucleus.SearchType.StartsWith) + '|seta sv_connectTimeout "1800"',], 'utf-8');

    //
    // Preparar las ventanas
    //

    Game.DontResize = true;
    Game.DontRemoveBorders = true;
    Game.DontReposition = false;
    Game.ResetWindows = true;

    var cfg = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";
    var dict = [
        Context.FindLineNumberInTextFile(cfg, "seta name", Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"',
        Context.FindLineNumberInTextFile(cfg, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
        Context.FindLineNumberInTextFile(cfg, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
        Context.FindLineNumberInTextFile(cfg, 'seta r_customMode', Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + Context.Width + "x" + Context.Height + '"',
        Context.FindLineNumberInTextFile(cfg, 'seta r_displayMode', Nucleus.SearchType.StartsWith) + '|seta fullscreen "0"',
        Context.FindLineNumberInTextFile(cfg, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "1"',
        Context.FindLineNumberInTextFile(cfg, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
        Context.FindLineNumberInTextFile(cfg, 'seta vid_xpos', Nucleus.SearchType.StartsWith) + '|seta vid_xpos "' + Context.PosX + '"',
        Context.FindLineNumberInTextFile(cfg, 'seta vid_ypos', Nucleus.SearchType.StartsWith) + '|seta vid_ypos "' + Context.PosY + '"',
    ];
    Context.ReplaceLinesInTextFile(cfg, dict);

    //
        // Quitar la música
    //

    var cfg = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\storage\\t5\\players\\config.cfg";

    if (Context.PlayerID !== 0)
    {
        var dict = [
            Context.FindLineNumberInTextFile(cfg, "seta snd_menu_music", Nucleus.SearchType.StartsWith) + '|seta snd_menu_music "0"',
            Context.FindLineNumberInTextFile(cfg, "seta snd_menu_voice", Nucleus.SearchType.StartsWith) + '|seta snd_menu_voice "0"',
            Context.FindLineNumberInTextFile(cfg, "seta sd_xa2_device_guid", Nucleus.SearchType.StartsWith) + '|seta sd_xa2_device_guid ""',
        ];
        Context.ReplaceLinesInTextFile(cfg, dict);
    }

    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers", "" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\plutonium-bootstrapper-win32.exe", "HIGHDPIAWARE", Nucleus.RegType.String);

    if (Player.IsRawKeyboard)
    {
        Context.FindLineNumberInTextFile(cfg, "seta gpad_enabled", Nucleus.SearchType.StartsWith) + '|seta gpad_enabled "0"';
        var d3d11_path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
        var dict = [
            Context.FindLineNumberInTextFile(d3d11_path, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
            Context.FindLineNumberInTextFile(d3d11_path, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=false",
            Context.FindLineNumberInTextFile(d3d11_path, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=true",
            Context.FindLineNumberInTextFile(d3d11_path, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false",
        ];
        Context.ReplaceLinesInTextFile(d3d11_path, dict);

    }
    else
    {
        Context.FindLineNumberInTextFile(cfg, "seta gpad_enabled", Nucleus.SearchType.StartsWith) + '|seta gpad_enabled "1"';
        var d3d11_path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
        var dict = [
            Context.FindLineNumberInTextFile(d3d11_path, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=false",
            Context.FindLineNumberInTextFile(d3d11_path, "DisabledToGame=", Nucleus.SearchType.StartsWith) + "|DisabledToGame=true",
            Context.FindLineNumberInTextFile(d3d11_path, "DontHookWndProc=", Nucleus.SearchType.StartsWith) + "|DontHookWndProc=false",
            Context.FindLineNumberInTextFile(d3d11_path, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true",
        ];
        Context.ReplaceLinesInTextFile(d3d11_path, dict);

    }

    if (Player.IsRawKeyboard || Context.NumberOfPlayers > 4)
    {
        Game.ProtoInput.InjectStartup = false;
        Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
        Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
        Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
        Game.ProtoInput.FindWindowHook = true;
        Game.ProtoInput.RegisterRawInputHook = true;
        Game.ProtoInput.GetRawInputDataHook = false;
        Game.ProtoInput.MessageFilterHook = true;
        Game.ProtoInput.GetCursorPosHook = false;
        Game.ProtoInput.SetCursorPosHook = false;
        Game.ProtoInput.GetKeyStateHook = false;
        Game.ProtoInput.GetAsyncKeyStateHook = false;
        Game.ProtoInput.GetKeyboardStateHook = false;
        Game.ProtoInput.CursorVisibilityHook = true;
        Game.ProtoInput.ClipCursorHook = true;
        Game.ProtoInput.FocusHooks = false;
        Game.ProtoInput.DrawFakeCursor = false;
        Game.ProtoInput.RawInputFilter = false;
        Game.ProtoInput.MouseMoveFilter = false;
        Game.ProtoInput.MouseActivateFilter = false;
        Game.ProtoInput.WindowActivateFilter = false;
        Game.ProtoInput.WindowActvateAppFilter = false;
        Game.ProtoInput.MouseWheelFilter = false;
        Game.ProtoInput.MouseButtonFilter = false;
        Game.ProtoInput.KeyboardButtonFilter = true;
        Game.ProtoInput.SendMouseWheelMessages = true;
        Game.ProtoInput.SendMouseButtonMessages = true;
        Game.ProtoInput.SendMouseMovementMessages = true;
        Game.ProtoInput.SendKeyboardButtonMessages = true;
        Game.ProtoInput.EnableFocusMessageLoop = false;
        Game.ProtoInput.FocusLoopIntervalMilliseconds = 0;
        Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
        Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
        Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
        Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
        Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
        Game.ProtoInput.BlockedMessages = [];
        Game.ProtoInput.RenameHandlesHook = false;
        Game.ProtoInput.RenameHandles = [];
        Game.ProtoInput.RenameNamedPipes = [];
    }

    if (Context.NumberOfPlayers < 5)
    {
        var d3d11_path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Plutonium\\bin\\d3d11.ini";
        var dict = [
            Context.FindLineNumberInTextFile(d3d11_path, "Enabled=", Nucleus.SearchType.StartsWith) + "|Enabled=true",
        ];
        Context.ReplaceLinesInTextFile(d3d11_path, dict);
    }

    Game.ProtoInput.OnInputLocked = function()
    {
        if (Player.IsRawKeyboard || Context.NumberOfPlayers > 4)
        {
            for (var i = 0; i < PlayerList.Count; i++)
            {
                var player = PlayerList[i];
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
                ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

                ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);
                System.Threading.Thread.Sleep(1000);
                ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
                ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
                ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
                ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
            }
        }

    }

    Game.ProtoInput.OnInputUnlocked = function()
    {
        for (var i = 0; i < PlayerList.Count; i++)
        {
            var player = PlayerList[i];
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
            ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

            ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
            ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);

            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
            ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        }
    }
}

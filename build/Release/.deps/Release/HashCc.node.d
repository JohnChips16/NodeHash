cmd_Release/HashCc.node := ln -f "Release/obj.target/HashCc.node" "Release/HashCc.node" 2>/dev/null || (rm -rf "Release/HashCc.node" && cp -af "Release/obj.target/HashCc.node" "Release/HashCc.node")

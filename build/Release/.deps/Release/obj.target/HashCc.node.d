cmd_Release/obj.target/HashCc.node := aarch64-linux-android-clang++ -o Release/obj.target/HashCc.node -shared -rdynamic -fPIC  -Wl,-soname=HashCc.node -Wl,--start-group Release/obj.target/HashCc/lib/libc++/lib.hash.o -Wl,--end-group -llog
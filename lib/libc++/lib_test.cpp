#include "SHA512.h"
#include <iostream>
#include <sstream>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <input_string>" << std::endl;
        return 1;  // Exit with an error code
    }

    SHA512 sha512;

    std::stringstream ss;
    ss << argv[1];
    std::cout << sha512.hash(ss.str()) << std::endl;

    return 0;
}

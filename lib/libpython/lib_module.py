from lib_hash import sha512

def hash_function(string):
    result = sha512(string)
    return print(result)

if __name__ == "__main__":
    import sys
    input_string = sys.argv[1]
    
    hash_function(input_string)

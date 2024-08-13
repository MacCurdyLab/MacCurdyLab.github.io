import os

for filename in os.listdir("."):
    new_name = "_".join(filename.split(" "))
    os.rename(filename, new_name)


print("DONE BBU!")
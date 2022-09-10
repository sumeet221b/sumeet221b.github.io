for i in range(1, 66):
    f = open(f"./{i}.md", "w")
    f.write("---\n")
    f.write(f"qno: {i}\n")
    f.write(f"year: 2021\n")
    f.write(f"set: 2\n")
    f.write("---")
    f.close()

import os
import filecmp

os.chdir(r'C:\k26rahul\NSFW')


def are_files_identical(file1, file2):
    # Use filecmp's cmp method to compare two files byte by byte
    return filecmp.cmp(file1, file2)


# Specify the paths to the two files you want to compare
file1_path = './random-1024.txt'
file2_path = './random-1024 copy.txt'

assert are_files_identical(file1_path, file2_path)

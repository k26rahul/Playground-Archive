import os
import random
import string

os.chdir(r'C:\k26rahul\NSFW')


def generate_random_data(size_bytes):
    return ''.join(random.choice(string.ascii_letters) for _ in range(size_bytes))


def create_random_text_file(size_bytes):
    filename = f'random-{size_bytes}.txt'

    with open(filename, 'w') as file:
        file.write(
            generate_random_data(size_bytes)
        )

        print(f"created at: {
            os.path.join(os.getcwd(), filename)
        }")


create_random_text_file(100)

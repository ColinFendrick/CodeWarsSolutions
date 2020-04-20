class Automaton(object):

    def read_commands(self, commands):
        state = 1
        for a in commands:
            if state == 1:
                if a == "1":
                    state = 2
            elif state == 2:
                if a == "0":
                    state = 3
            else:
                state = 2
            
        return state == 2

my_automaton = Automaton()
